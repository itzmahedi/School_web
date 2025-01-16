"use client";

export default function TotalSchoolArea() {
  return (
    <section className="total-students-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-head">
              <h3 className="section-head-title">
                ছাত্র/ছাত্রীদের পরিসংখান<span className="title-line"></span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="total-students-group">
              {/* Single Total Student */}
              <div className="total-students-card">
                <h3 className="total-students-number counter">145</h3>
                <p className="total-students-text">Total Students</p>
                <span className="total-students-class">প্রথম শ্রেণী</span>
              </div>
              <div className="total-students-card">
                <h3 className="total-students-number counter">0</h3>
                <p className="total-students-text">Total Students</p>
                <span className="total-students-class">দ্বিতীয় শ্রেণী</span>
              </div>
              <div className="total-students-card">
                <h3 className="total-students-number counter">0</h3>
                <p className="total-students-text">Total Students</p>
                <span className="total-students-class">তৃতীয় শ্রেণী</span>
              </div>
              <div className="total-students-card">
                <h3 className="total-students-number counter">0</h3>
                <p className="total-students-text">Total Students</p>
                <span className="total-students-class">চতুর্থ শ্রেণী</span>
              </div>
              <div className="total-students-card">
                <h3 className="total-students-number counter">0</h3>
                <p className="total-students-text">Total Students</p>
                <span className="total-students-class">পঞ্চম শ্রেণী</span>
              </div>
              <div className="total-students-card">
                <h3 className="total-students-number counter">0</h3>
                <p className="total-students-text">Total Students</p>
                <span className="total-students-class">ষষ্ঠ শ্রেণী</span>
              </div>
              <div className="total-students-card">
                <h3 className="total-students-number counter">0</h3>
                <p className="total-students-text">Total Students</p>
                <span className="total-students-class">সপ্তম শ্রেণী</span>
              </div>
              <div className="total-students-card">
                <h3 className="total-students-number counter">0</h3>
                <p className="total-students-text">Total Students</p>
                <span className="total-students-class">অষ্টম শ্রেণী</span>
              </div>
              <div className="total-students-card">
                <h3 className="total-students-number counter">0</h3>
                <p className="total-students-text">Total Students</p>
                <span className="total-students-class">নবম শ্রেণী</span>
              </div>
              <div className="total-students-card">
                <h3 className="total-students-number counter">35</h3>
                <p className="total-students-text">Total Students</p>
                <span className="total-students-class">দশম শ্রেণী</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
