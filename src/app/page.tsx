import BlogArea from "src/data/Frontend/home/BlogArea";
import Gallery from "src/data/Frontend/home/Gallery";
import HeroSection from "src/data/Frontend/home/HeroSection";
import MainHome from "src/data/Frontend/home/MainHome";
import SchoolComitte from "src/data/Frontend/home/SchoolComitte";
import StudentArea from "src/data/Frontend/home/StudentArea";
import TotalSchoolArea from "src/data/Frontend/home/TotalSchoolArea";


export default function Home() {
    return (
      <>
        <HeroSection/>
        <MainHome/>
        <Gallery/>
        <SchoolComitte/>
        <TotalSchoolArea/>
        <TotalSchoolArea/>
        <StudentArea/>
        <BlogArea/>
      </>
    );
  }