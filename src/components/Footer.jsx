import React from "react";

function Footer() {
  return (
    // <!-- =============== START OF FOOTER =============== -->
    <footer className="footer1 bg-dark whitelabel">
      {/* <!-- ===== START OF FOOTER WIDGET AREA ===== --> */}
      <div className="footer-widget-area ptb100">
        <div className="container">
          <div className="row">
            {/* <!-- Start of Widget 1 --> */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget widget-about">
                {/* <!-- INSERT YOUR LOGO HERE --> */}
                <img src="assets/images/logo.svg" alt="logo" className="logo" />
                {/* <!-- INSERT YOUR WHITE LOGO HERE --> */}
                <img
                  src="assets/images/logo-white.svg"
                  alt="white logo"
                  className="logo-white"
                />
                <p className="nomargin ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque, ducimus, atque. Praesentium suscipit provident
                  explicabo dignissimos nostrum numquam deserunt earum
                  accusantium et fugit.
                </p>
              </div>
            </div>
            {/* <!-- End of Widget 1 --> */}

            {/* <!-- Start of Widget 2 --> */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget widget-links">
                <h4 className="widget-title">Useful links</h4>

                <ul className="general-listing">
                  <li>
                    <a href="#">about movify</a>
                  </li>
                  <li>
                    <a href="#">blog</a>
                  </li>
                  <li>
                    <a href="#">forum</a>
                  </li>
                  <li>
                    <a href="#">my account</a>
                  </li>
                  <li>
                    <a href="#">watch list</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End of Widget 2 --> */}

            {/* <!-- Start of Widget 3 --> */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget widget-blog">
                <h4 className="widget-title">latest news</h4>

                <ul className="blog-posts">
                  <li>
                    <a href="#">blog post 1</a>
                    <small>januar 13, 2018</small>
                  </li>
                  <li>
                    <a href="#">blog post 2</a>
                    <small>januar 13, 2018</small>
                  </li>
                  <li>
                    <a href="#">blog post 3</a>
                    <small>januar 13, 2018</small>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End of Widget 3 --> */}

            {/* <!-- Start of Widget 4 --> */}
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget widget-social">
                <h4 className="widget-title">follow us</h4>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Itaque, ducimus, atque.
                </p>

                {/* <!-- Start of Social Buttons --> */}
                <ul className="social-btns">
                  {/* <!-- Social Media --> */}
                  <li>
                    <a href="#" className="social-btn-roll facebook">
                      <div className="social-btn-roll-icons">
                        <i className="social-btn-roll-icon fa fa-facebook"></i>
                        <i className="social-btn-roll-icon fa fa-facebook"></i>
                      </div>
                    </a>
                  </li>

                  {/* <!-- Social Media --> */}
                  <li>
                    <a href="#" className="social-btn-roll twitter">
                      <div className="social-btn-roll-icons">
                        <i className="social-btn-roll-icon fa fa-twitter"></i>
                        <i className="social-btn-roll-icon fa fa-twitter"></i>
                      </div>
                    </a>
                  </li>

                  {/* <!-- Social Media --> */}
                  <li>
                    <a href="#" className="social-btn-roll google-plus">
                      <div className="social-btn-roll-icons">
                        <i className="social-btn-roll-icon fa fa-google-plus"></i>
                        <i className="social-btn-roll-icon fa fa-google-plus"></i>
                      </div>
                    </a>
                  </li>

                  {/* <!-- Social Media --> */}
                  <li>
                    <a href="#" className="social-btn-roll instagram">
                      <div className="social-btn-roll-icons">
                        <i className="social-btn-roll-icon fa fa-instagram"></i>
                        <i className="social-btn-roll-icon fa fa-instagram"></i>
                      </div>
                    </a>
                  </li>
                </ul>
                {/* <!-- End of Social Buttons --> */}
              </div>
            </div>
            {/* <!-- End of Widget 4 --> */}
          </div>
        </div>
      </div>
      {/* <!-- ===== END OF FOOTER WIDGET AREA ===== --> */}

      {/* <!-- ===== START OF FOOTER COPYRIGHT AREA ===== --> */}
      <div className="footer-copyright-area ptb30">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex">
                <div className="links">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#">Privacy & Cookies</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Legal Disclaimer</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Community</a>
                    </li>
                  </ul>
                </div>

                <div className="copyright ml-auto">
                  All Rights Reserved by <a href="#">Movify</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ===== END OF FOOTER COPYRIGHT AREA ===== --> */}
    </footer>
  );
}

export default Footer;
