import { Link } from "react-router-dom";
import Count from "../common/Count";

export default function AboutAreaTwo() {
  return (
    <>
      {/* <!-- who about Section Start --> */}
      <section className="who-about-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="thumb-wrap">
                <div className="thumb mb-lg-4 mb-3">
                  <img src="/assets/img/about/about-thumb2.svg" alt="Rezoan Iqbal About" className="mimg" />
                  <div className="about-text-box d-center">
                    <div className="text-circle__box d-center">
                      <div className="icon">
                        <img src="/assets/img/about/text-grop.png" alt="star" />
                      </div>
                      <img src="/assets/img/about/about-circle-text.png" alt="circle text"
                        className="circle__text cir36" />
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex flex-sm-nowrap flex-wrap align-items-center gap-sm-2 gap-1 justify-content-between gap-xl-5 gap-4">
                  <div className="fs-20px text-uppercase fw-medium text-dark">
                    Web Developer &amp; Tech Entrepreneur <br /> from Cumilla, Bangladesh.
                  </div>
                  <Link to="/project" className="common_btn common_btn-blacktheme text-nowrap">
                    view my work
                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right-content">
                <div className="mb-4 pb-xxl-2 text-lg-end text-center">
                  <h2 className="visible-slowly-bottom">
                    Who I Am
                  </h2>
                  <h3 className="wow fadeInUp" data-wow-delay="0.5s">
                    Passionate About Full-Stack Engineering, AI &amp; Business Automation
                  </h3>
                  <p className="mt-lg-3 mt-2 wow fadeInUp" data-wow-delay="0.6s">
                    I’m Rezoan Iqbal, a web developer and tech entrepreneur skilled in full-stack development, AI-assisted coding, UI/UX design, e-commerce, and business automation. Currently studying Bachelor in CSE at Hamdard University Bangladesh, I combine technical expertise with real-world project delivery across global clients.
                  </p>
                </div>
                <div className="about-count_inner">
                  <div className="about_count_item">
                    <div className="box">
                      <div className="d-flex justify-content-center mb-1 cont-area">
                        <span className="count">
                          <Count number={25} text="+" />
                        </span>
                      </div>
                      <p className="fs-seven fw-normal text-dark opacity-75">
                        Global Projects Delivered Successfully
                      </p>
                    </div>
                  </div>
                  <div className="about_count_item">
                    <div className="box">
                      <div className="d-flex justify-content-center mb-1 cont-area">
                        <span className="count">
                          <Count number={100} text="%" />
                        </span>
                      </div>
                      <p className="fs-seven fw-normal text-dark opacity-75">
                        Client Satisfaction &amp; Quality
                      </p>
                    </div>
                  </div>
                  <div className="about_count_item">
                    <div className="box">
                      <div className="d-flex justify-content-center mb-1 cont-area">
                        <span className="count">
                          <Count number={5} text="+ Yrs" />
                        </span>
                      </div>
                      <p className="fs-seven fw-normal text-dark opacity-75">
                        Hands-On Industry Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
