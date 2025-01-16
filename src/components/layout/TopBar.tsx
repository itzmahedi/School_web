import React from 'react';

export default function TopBar() {
  return (
    <div className="topbar-area">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-12 col-xl-6 col-12">
                <div className="topbar-left">
                    <div className="topbar-update-notice">
                        <span className="topbar-update-notice-title">আপডেট</span>

                         {/* Update Notice Slider */}
                        <div className="topbar-update-notice-slider">
                            <div className="topbar-update-notice-main">
                                <p className="topbar-update-notice-single">
                                    <a href="notice.html"
                                        target="_blank">স্কুল শুরু হওয়ার নির্ধারিত সময় প্রসঙ্গে নোটিশ</a>
                                </p>
                            </div>
                            <div className="topbar-update-notice-main">
                                <p className="topbar-update-notice-single">
                                    <a href="notice.html"
                                        target="_blank">তাপপ্রবাহের সতর্কবার্তার কারণে শ্রেণি কার্যক্রম ও চলমান পরীক্ষা বন্ধ</a>
                                </p>
                            </div>
                            <div className="topbar-update-notice-main">
                                <p className="topbar-update-notice-single">
                                    <a href="notice.html"
                                        target="_blank">প্রথম সাময়িক পরীক্ষা ২০২৩ এর প্রসঙ্গে বিজ্ঞপ্তি সকল শ্রেণীর</a>
                                </p>
                            </div>
                        </div>

                            {/* Update Notice Scroll */}
                        <div className="topbar-update-notice-scroll">
                            <p className="topbar-update-notice-single">
                                <a href="notice.html"
                                    target="_blank">স্কুল শুরু হওয়ার নির্ধারিত সময় প্রসঙ্গে নোটিশ</a>
                            </p>
                            <p className="topbar-update-notice-single">
                                <a href="notice.html"
                                    target="_blank">তাপপ্রবাহের সতর্কবার্তার কারণে শ্রেণি কার্যক্রম ও চলমান পরীক্ষা
                                    বন্ধ সংক্..</a>
                            </p>
                            <p className="topbar-update-notice-single">
                                <a href="notice.html"
                                    target="_blank">প্রথম সাময়িক পরীক্ষা ২০২৩ এর প্রসঙ্গে বিজ্ঞপ্তি সকল শ্রেণীর</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <div className="topbar-right">
                    <div className="topbar-school-info">
                        <ul className="topbar-school-info-list">
                            <li>EIIN No:<span>12547</span></li>
                            <li>School code:<span>44231</span></li>
                            <li>Reg. No:<span>6100-KA</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
