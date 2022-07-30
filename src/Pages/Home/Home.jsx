import React from "react";
import MainSection from "./MainSection";
import News from "./News";
import LatestProducts from "./LatestProducts";
import Bestsellers from "./Bestsellers";
import Testimonials from "./Testimonials";

export default function Home({ onItems }) {
  return (
    <div className="main__page">
      <MainSection />
      <News />
      <LatestProducts onLatestProducts={onItems}/>
      <Bestsellers prop1={onItems}/>
      <Testimonials />
    </div>
  );
}
