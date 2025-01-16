"use client";

import Script from "next/script";

const ScriptLinks = () => {
  return (
    <>
      {/* Core Libraries */}
      <Script src="/frontend_assets/js/jquery.min.js" strategy="afterInteractive" />
      <Script src="/frontend_assets/js/jquery-migrate.js" strategy="afterInteractive" />

      {/* Plugins */}
      <Script src="/frontend_assets/js/modernizer.min.js" strategy="afterInteractive" />
      <Script src="/frontend_assets/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/frontend_assets/js/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/frontend_assets/js/magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/frontend_assets/js/backToTop.js" strategy="afterInteractive" />
      <Script src="/frontend_assets/js/wow.min.js" strategy="afterInteractive" />
      <Script src="/frontend_assets/js/jquery-fancybox.min.js" strategy="afterInteractive" />
      <Script src="/frontend_assets/js/jquery.counterup.min.js" strategy="afterInteractive" />
      <Script src="/frontend_assets/js/waypoints.min.js" strategy="afterInteractive" />
      <Script src="/frontend_assets/js/nice-select.min.js" strategy="afterInteractive" />
      <Script src="/frontend_assets/js/active.js" strategy="afterInteractive" />
    </>
  );
};

export default ScriptLinks;
