"use client";

export default function StudentArea() {
  return (
    <section className="students-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-head">
              <h3 className="section-head-title">
                সেরা ছাত্র/ছাত্রী <span className="title-line style-2"></span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="students-slider">
              {/* Single Student Card */}
              <div className="students-card">
                <div className="students-card-img">
                  <img src="/frontend_assets/img/img-4.png" alt="Student" />
                </div>
                <div className="students-card-info">
                  <h4>Md Fahim Hossain Alif</h4>
                  <span>(দ্বিতীয় শ্রেণী)</span>
                  <ul>
                    <li>
                      রোল নং: <span>২</span>
                    </li>
                    <li>
                      সময়: <span>২০২৩</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section-bottom-btn">
              <a href="students.html" className="theme-btn secondary">
                আরো দেখুন<i className="fi-rr-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
