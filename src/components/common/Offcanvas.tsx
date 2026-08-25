import MobileMenu from "@/layouts/headers/MobileMenu";
import { Link } from "react-router-dom";

interface OffcanvasProps {
  offCanvasOpen: boolean;
  setOffCanvasOpen: (open: boolean) => void;
}

export default function Offcanvas({ offCanvasOpen, setOffCanvasOpen }: OffcanvasProps) {
  return (
    <>
      {/* <!-- Offcanvas Area Start --> */}
      <div className="fix-area meanmenu_open-alltime">
        <div className={`offcanvas__info ${offCanvasOpen ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                <Link to="/" className="offcanvas__logo text-decoration-none" onClick={() => setOffCanvasOpen(false)}>
                  <span className="fs-32px fw-bold text-white heading-font text-uppercase">
                    REZOAN<span className="text-theme">.</span>
                  </span>
                </Link>
                <div className="offcanvas__close">
                  <button onClick={() => setOffCanvasOpen(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="fix mb-3">
                <div className="active_menu-alltime">
                  <div className="mean-bar2">
                    <nav className="mean-nav2">
                      <MobileMenu setOffCanvasOpen={setOffCanvasOpen} />
                    </nav>
                  </div>
                </div>
              </div>
              <div className="offcanvas__contact">
                <h4 className="fw_600">Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt fs-five"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <span className="fs-eight">Homna (3546), Cumilla, Bangladesh</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+8801316357404">+8801316357404</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:rezoaniqbalrohan@gmail.com">rezoaniqbalrohan@gmail.com</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <span className="fs-eight">Available for Worldwide Projects</span>
                    </div>
                  </li>

                </ul>
                <div className="header-button mt-4">
                  <Link to="/contact" onClick={() => setOffCanvasOpen(false)}
                    className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2">
                    Get In Touch
                  </Link>
                </div>
                <div
                  className="header-top-social mt-5 d-grid flex-column gap-2 justify-content-start align-items-center">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="sub-font"><i className="fa-brands fa-facebook"></i>
                    Facebook</a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="sub-font"><i className="fa-brands fa-github"></i>
                    GitHub</a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="sub-font"><i className="fa-brands fa-linkedin"></i>
                    LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`offcanvas__overlay ${offCanvasOpen ? "overlay-open" : ""}`} onClick={() => setOffCanvasOpen(false)}></div>
    </>
  )
}
