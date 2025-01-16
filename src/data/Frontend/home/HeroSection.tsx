"use client";

export default function HeroSection() {
  return (
    <section className="hero-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-slider">
              {/* Hero Single Slider */}
              <div
                className="hero-single-slider background-image"
                style={{
                  backgroundImage: "url('/frontend_assets/img/slider/slider-img-2.png')",
                }}
              >
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8 col-12 align-self-end">
                    <div className="hero-content">
                      <h3 className="hero-content-title">
                        স্বাগতম এক্সওয়াইজেধ স্কুল এবং কলেজ এর পক্ষ থেকে!
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hero-single-slider background-image"
                style={{
                  backgroundImage: "url('/frontend_assets/img/slider/slider-img-1.png')",
                }}
              >
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8 col-12 align-self-end">
                    <div className="hero-content">
                      <h3 className="hero-content-title">
                        বিশ্বমানের শিক্ষাদানের একটি উপযুক্ত স্কুল প্রতিষ্ঠান।
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hero-single-slider background-image"
                style={{
                  backgroundImage: "url('/frontend_assets/img/slider/slider-img-3.png')",
                }}
              >
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-8 col-12 align-self-end">
                    <div className="hero-content">
                      <h3 className="hero-content-title">
                        মনোরোম পরিবেশে আমরা দিচ্ছি সেরা মানের শিক্ষা ব্যবস্থা।
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
