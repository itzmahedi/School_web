import BackToTop from "src/components/layout/BackToTop";
import Footer from "src/components/layout/Footer";
import Header from "src/components/layout/Header";
import HeadLinks from "src/components/layout/HeadLinks";
import MobileMenuModal from "src/components/layout/MobileMenuModal";
import Preloader from "src/components/layout/Preloader";
import ScriptLinks from "src/components/layout/ScriptLinks";
import TopBar from "src/components/layout/TopBar";

export const metadata = {
  title: "School Website",
  description: "School description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <HeadLinks />
      <body>
        {/* <Preloader/> */}
        <BackToTop />
        <MobileMenuModal />
        <TopBar />
        <Header />
        {children}
        <Footer />
        <ScriptLinks />
      </body>
    </html>
  );
}
