"use client";

export default function BlogArea() {
  return (
    <section className="blog-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-head">
              <h3 className="section-head-title">
                সংবাদ/ ব্লগ সমূহ <span className="title-line"></span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Single Blog */}
          <div className="col-lg-6 col-xl-4 col-md-6 col-12">
            <div className="single-blog">
              <div className="blog-img">
                <img src="/frontend_assets/img/blog/blog1 .jpg" alt="Blog Image" />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    Post by:<span>Admin</span>
                  </li>
                  <li>
                    Date:<span>05 Nov, 2023</span>
                  </li>
                </ul>
                <a href="blog-details.html">
                  <h4 className="blog-content-title">
                    How to improve your technical skills
                  </h4>
                </a>
                <div className="blog-content-btn">
                  <a href="blog-details.html" className="theme-btn secondary">
                    আরো দেখুন<i className="fi-rr-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 col-md-6 col-12">
            <div className="single-blog">
              <div className="blog-img">
                <img src="/frontend_assets/img/blog/image (35).png" alt="Blog Image" />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    Post by:<span>Admin</span>
                  </li>
                  <li>
                    Date:<span>02 Nov, 2023</span>
                  </li>
                </ul>
                <a href="blog-details.html">
                  <h4 className="blog-content-title">
                    ছাত্র-ছাত্রীদের কেন রাতের বেলায় পড়তে গেলে ঘুম আসে
                  </h4>
                </a>
                <div className="blog-content-btn">
                  <a href="blog-details.html" className="theme-btn secondary">
                    আরো দেখুন<i className="fi-rr-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 col-md-6 col-12">
            <div className="single-blog">
              <div className="blog-img">
                <img src="/frontend_assets/img/blog/img-3.png" alt="Blog Image" />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    Post by:<span>Admin</span>
                  </li>
                  <li>
                    Date:<span>21 Oct, 2023</span>
                  </li>
                </ul>
                <a href="blog-details.html">
                  <h4 className="blog-content-title">
                    কলেজে ভর্তি হওয়ার পূর্বে যেসকল বৈশিষ্ট তোমার মাঝে থাকা উচিত!
                  </h4>
                </a>
                <div className="blog-content-btn">
                  <a href="blog-details.html" className="theme-btn secondary">
                    আরো দেখুন<i className="fi-rr-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section-bottom-btn">
              <a href="blog.html" className="theme-btn secondary">
                সকল ব্লগ<i className="fi-rr-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
