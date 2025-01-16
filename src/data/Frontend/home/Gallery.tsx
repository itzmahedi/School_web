"use client";

export default function Gallery() {
  return (
    <section className="gallery-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-head">
              <h3 className="section-head-title">
                ছবি এবং ভিডিও গ্যালারী
                <span className="title-line style-3"></span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="gallery-slider">
              {/* Single Gallery */}
              <div className="single-gallery">
                <div className="gallery-img">
                  <img
                    src="/frontend_assets/img/gallery/young-asia-businesswoman-using-laptop-talk-colleague-about-plan-video-call-meeting-while-work-from-home-living-room(1).jpg"
                    alt="Gallery Image"
                  />

                  <a
                    href="img/gallery/successful-child-with-graduation-cap-backpack-full-books(1).jpg"
                    data-fancybox="photo"
                    className="image-view-btn"
                  >
                    <i className="fi fi-ss-eye"></i>
                  </a>
                </div>
                <div className="gallery-content">
                  <h4 className="gallery-content-title">
                    বিদ্যালয়ের সেরা ছাত্র
                  </h4>
                </div>
              </div>
              <div className="single-gallery">
                <div className="gallery-img">
                  <img
                    src="/frontend_assets/img/gallery/empty-classroom-due-coronavirus-pandemic(1).jpg"
                    alt="Gallery Image"
                  />

                  <a
                    href="https://www.youtube.com/watch?v=kCHeKc2R96o"
                    className="video-popup-img popup-video image-view-btn"
                  >
                    <i className="fi fi-br-play"></i>
                  </a>
                </div>
                <div className="gallery-content">
                  <h4 className="gallery-content-title">
                    সরাসরি ক্লাস চলাকালীন ভিডিও
                  </h4>
                </div>
              </div>
              <div className="single-gallery">
                <div className="gallery-img">
                  <img
                    src="/frontend_assets/img/gallery/african-american-female-teacher-teaching-students-class-elementary-school(1).jpg"
                    alt="Gallery Image"
                  />

                  <a
                    href="img/gallery/african-american-female-teacher-teaching-students-class-elementary-school(1).jpg"
                    data-fancybox="photo"
                    className="image-view-btn"
                  >
                    <i className="fi fi-ss-eye"></i>
                  </a>
                </div>
                <div className="gallery-content">
                  <h4 className="gallery-content-title">
                    সরাসরি ক্লাস চলাকালীন ফটো
                  </h4>
                </div>
              </div>
              <div className="single-gallery">
                <div className="gallery-img">
                  <img
                    src="/frontend_assets/img/gallery/young-asia-businesswoman-using-laptop-talk-colleague-about-plan-video-call-meeting-while-work-from-home-living-room(1).jpg"
                    alt="Gallery Image"
                  />

                  <a
                    href="img/gallery/young-asia-businesswoman-using-laptop-talk-colleague-about-plan-video-call-meeting-while-work-from-home-living-room(1).jpg"
                    data-fancybox="photo"
                    className="image-view-btn"
                  >
                    <i className="fi fi-ss-eye"></i>
                  </a>
                </div>
                <div className="gallery-content">
                  <h4 className="gallery-content-title">
                    অনলাইন ক্লাস চলাকালীন ফটো
                  </h4>
                </div>
              </div>
              <div className="single-gallery">
                <div className="gallery-img">
                  <img src="/frontend_assets/img/gallery/img-2.png" alt="Gallery Image" />

                  <a
                    href="img/gallery/img-1.png"
                    data-fancybox="photo"
                    className="image-view-btn"
                  >
                    <i className="fi fi-ss-eye"></i>
                  </a>
                </div>
                <div className="gallery-content">
                  <h4 className="gallery-content-title">
                    বিদ্যালয়ের ভিতরের ছবির একাংশ। এক্সওয়াইজেধ স্কুল এবং কলেজ
                  </h4>
                </div>
              </div>
              <div className="single-gallery">
                <div className="gallery-img">
                  <img src="/frontend_assets/img/gallery/img-2.png" alt="Gallery Image" />

                  <a
                    href="https://www.youtube.com/watch?v=t4ejFV6n4b8"
                    className="video-popup-img popup-video image-view-btn"
                  >
                    <i className="fi fi-br-play"></i>
                  </a>
                </div>
                <div className="gallery-content">
                  <h4 className="gallery-content-title">
                    বিদ্যালয়ের ভিতরের ছবির একাংশ। এক্সওয়াইজেধ স্কুল এবং কলেজ
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section-bottom-btn">
              <a href="gallery.html" className="theme-btn secondary">
                আরো দেখুন <i className="fi-rr-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
