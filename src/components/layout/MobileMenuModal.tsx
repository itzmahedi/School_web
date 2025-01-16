import React from 'react';

export default function MobileMenuModal() {
  return (
    <div className="modal mobile-menu-modal offcanvas-modal fade" id="offcanvas-modal">
        <div className="modal-dialog offcanvas-dialog">
            <div className="modal-content">
                <div className="modal-header offcanvas-header">
                    {/* offcanvas-logo-start */}
                    <div className="offcanvas-logo"><a href="index.html"><img src="/frontend_assets/img/logo.svg" alt="#" /></a>
                    </div>
                    {/* offcanvas-logo-end */}
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <i className="fi fi-ss-cross"></i>
                    </button>
                </div>
                <div className="mobile-menu-modal-main-body">
                     {/* offcanvas-menu start  */}
                    <nav id="offcanvas-menu" className="navigation offcanvas-menu">
                        <ul id="nav mobile-nav" className="list-none offcanvas-men-list">
                            <li>
                                <a href="index.html">মূলপাতা</a>
                            </li>
                            <li>
                                <a className="menu-arrow" href="#">পরিচিতি</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="about.html">প্রতিষ্ঠান পরিচিতি</a>
                                    </li>
                                    <li>
                                        <a href="info.html">বিদ্যালয়ের তথ্যাদি</a>
                                    </li>
                                    <li>
                                        <a href="message.html">স্কুল পরিচালকদের বাণী</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="menu-arrow" href="#">জনবল</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="teachers.html">শিক্ষক/শিক্ষিকা</a>
                                    </li>
                                    <li>
                                        <a href="committee.html">স্কুল কমিটি সদস্যবৃন্দ</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="menu-arrow" href="#">শিক্ষার্থী</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="running-students.html">অধ্যয়নরত
                                            শিক্ষার্থীর সংখ্যা</a>
                                    </li>
                                    <li>
                                        <a href="students.html">অধ্যয়নরত শিক্ষার্থীর
                                            তালিকা</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="menu-arrow" href="#">পরীক্ষার ফলাফল</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="public-exam.html">পাবলিক পরীক্ষা</a>
                                    </li>
                                    <li>
                                        <a href="exam.html">বিদ্যালয়ের অভ্যন্তরীন
                                            পরীক্ষা</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="gallery.html">ছবির গ্যালারী</a></li>
                            <li><a href="contact.html">যোগাযোগ</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="mobile-menu-modal-main-bottom">
                    <div className="topbar-school-info">
                        <ul className="topbar-school-info-list">
                            <li>EIIN No:<span>12547</span></li>
                            <li>School code:<span>44231</span></li>
                            <li>Reg. No:<span>6100-KA</span></li>
                        </ul>
                    </div>
                     {/* offcanvas-menu end */}
                    <div className="mobile-menu-modal-bottom header-menu-btn">
                        <a href="login.html" target="_blank" className="theme-btn"><span><i className="fi fi-rs-sign-in-alt"></i>Login</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
