import About from "@/components/About";
import Contact from "@/components/Contact";
import Content from "@/components/Content";
import Hero from "@/components/Hero";
import HorizontalVideoBox from "@/components/HorizontalVideoBox";
import Navbar from "@/components/Navbar";
import VerticalVideoBox from "@/components/VerticalVideoBox";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      {/*<Hero />*/}
      <Content />
      <HorizontalVideoBox />
      <VerticalVideoBox />
      <Contact />
    </>
  );
}
