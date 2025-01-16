import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header id="active-sticky" className="header-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="header-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-xl-3 col-md-8 col-8">
                                <div className="header-logo">
                                    <a href="index.html">
                                        <img src="/frontend_assets/img/logo.svg" alt="#" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-9 col-md-4 col-4">
                                <div className="header-right">
                                    <div className="header-menu">
                                        <nav className="navigation">
                                            <ul className="header-menu-list">
                                                <li className="active">
                                                    <Link href="/">মূলপাতা</Link>
                                                </li>
                                                <li>
                                                    <a href="#">পরিচিতি<i className="fi-rr-angle-small-down"></i></a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <Link href="/about-us" passHref>প্রতিষ্ঠান পরিচিতি</Link>
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
                                                    <a href="#">জনবল<i className="fi-rr-angle-small-down"></i></a>
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
                                                    <a href="#">শিক্ষার্থী<i className="fi-rr-angle-small-down"></i></a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="running-students.html">অধ্যয়নরত শিক্ষার্থীর সংখ্যা</a>
                                                        </li>
                                                        <li>
                                                            <a href="students.html">অধ্যয়নরত শিক্ষার্থীর তালিকা</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">পরীক্ষার ফলাফল<i className="fi-rr-angle-small-down"></i></a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <a href="public-exam.html">পাবলিক পরীক্ষা</a>
                                                        </li>
                                                        <li>
                                                            <a href="exam.html">বিদ্যালয়ের অভ্যন্তরীন পরীক্ষা</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="gallery.html">ছবির গ্যালারী</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">যোগাযোগ</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-menu-btn">
                                        <a href="login.html" target="_blank" className="theme-btn">
                                            <i className="fi fi-rs-sign-in-alt"></i>Login
                                        </a>
                                    </div>
                                </div>
                                <button type="button" className="mobile-menu-offcanvas-toggler" data-bs-toggle="modal" data-bs-target="#offcanvas-modal">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}
