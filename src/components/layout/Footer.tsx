import React from "react";

export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-widget quick-links">
                <h4 className="footer-widget-title">অন্যান্য লিঙ্ক</h4>
                <ul className="quick-links-inner">
                  <li>
                    <a href="#" target="_blank">
                      <img src="/frontend_assets/img/link.svg" alt="Link" />
                      পাঠশালা
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/frontend_assets/img/link.svg" alt="Link" />
                      ই-স্কুল
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/frontend_assets/img/link.svg" alt="Link" />
                      ভর্তি পরীক্ষার আবেদন
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/frontend_assets/img/link.svg" alt="Link" />
                      পিডিএস (সরকারি মাধ্যমিক)
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/frontend_assets/img/link.svg" alt="Link" />
                      ওয়েব মেইল লগিন
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-widget quick-links">
                <h4 className="footer-widget-title">সরাসরি লিঙ্ক</h4>
                <ul className="quick-links-inner">
                  <li>
                    <a href="contact.html">যোগাযোগ</a>
                  </li>
                  <li>
                    <a href="about.html">প্রতিষ্ঠান পরিচিতি</a>
                  </li>
                  <li>
                    <a href="info.html">প্রতিষ্ঠানের তথ্যাদি</a>
                  </li>
                  <li>
                    <a href="teachers.html">সকল শিক্ষক/শিক্ষিকা বৃন্দ</a>
                  </li>
                  <li>
                    <a href="committee.html">স্কুল কমিটির সদস্যবৃন্দ</a>
                  </li>
                  <li>
                    <a href="gallery.html">ছবি এবং ভিডিও গ্যালারী</a>
                  </li>
                  <li>
                    <a href="running-students.html">
                      অধ্যায়ণরত শিক্ষার্থীর সংখ্যা
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">সংবাদ/ ব্লগ সমূহ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="footer-widget contact">
                <h4 className="footer-widget-title">যোগাযোগ</h4>
                {/* Single Widget  */}
                <div className="footer-contact-widget">
                  <div className="footer-contact-icon">
                    <img src="/frontend_assets/img/map.svg" alt="#" />
                  </div>
                  <div className="footer-contact-info">
                    <p className="footer-contact-text">
                      XYZ School &amp; College, Main Road, Khilgaon, Dhaka
                    </p>
                  </div>
                </div>

                {/* Single Widget  */}
                <div className="footer-contact-widget">
                  <div className="footer-contact-icon">
                    <img src="/frontend_assets/img/phone.svg" alt="#" />
                  </div>
                  <div className="footer-contact-info">
                    <a href="tel:+880 1234 567890">+8801000000000</a>
                    <a href="tel:+880 1234 567890">+8801000000002</a>
                  </div>
                </div>

                {/* Single Widget  */}
                <div className="footer-contact-widget">
                  <div className="footer-contact-icon">
                    <img src="/frontend_assets/img/envelope.svg" alt="#" />
                  </div>
                  <div className="footer-contact-info">
                    <a href="mailto:info@xyzschool.com">
                      example@yourschool.com
                    </a>
                    <a href="mailto:hello@xyzschool.com">
                      example_two@yourschool.com
                    </a>
                  </div>
                </div>

                {/* Single Widget  */}
                <div className="footer-contact-widget">
                  <div className="footer-contact-icon">
                    <img src="/frontend_assets/img/info.svg" alt="#" />
                  </div>
                  <div className="footer-contact-info">
                    <ul>
                      <li>
                        EIIN No:<span>12547</span>
                      </li>
                      <li>
                        School code:<span>44231</span>
                      </li>
                      <li>
                        Reg. No:<span>6100-KA</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="footer-copyright">
                <p className="footer-copyright-text">
                  © 2025 XYZ School &amp; College 21. All right reserved.
                </p>
                <span>
                  Design & Developed by:
                  <a href="#" target="_blank">
                    Company Limited
                  </a>
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="footer-social">
                <span>Connect us</span>

                <ul className="footer-social-list">
                  <li>
                    <a href="#" target="_blank">
                      <img src="/frontend_assets/img/facebook.svg" alt="#" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/frontend_assets/img/messenger.png" alt="#" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/frontend_assets/img/twitter.png" alt="#" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/frontend_assets/img/instagram.png" alt="#" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/frontend_assets/img/linkedin.svg" alt="#" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/frontend_assets/img/whatsapp.svg" alt="#" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/frontend_assets/img/telegram.svg" alt="#" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/frontend_assets/img/youtube.svg" alt="#" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
