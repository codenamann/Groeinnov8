import React from "react";
import Hero from "../common/Hero";
import LeftContentImag from "../common/LeftContentImag";
import Whatwedo from "./whatwedo";
import Homewhay from "./homewhay";
import OurPublications from "./ourpublications";
import backgome from "../../assets/groeinnvo8banner1.webp";
import background from "../../assets/backgroundhome.png";
import background1 from "../../assets/backgroundhome2.png";
import background2 from "../../assets/consulting.webp";
import gkc from "../../assets/gkc.png";
import talent from "../../assets/talent.png";
import { tools } from "../contensts";
import Marketingtools from "./marketingtools";
import "./home.css";
import Whoweare from './Whoweare';
import Groeiknowledge from './groeiKnowledge';

export default function Home() {
  return (
    <div>
      <Hero
        image={backgome}
        title="Your strategic partner in digital innovation & transformation"
        subtitle="Fueling sustainable business growth and client success through innovative technology solutions, domain expertise, and cutting-edge actionable insights."
        buttoname="Let's Get In Touch"
        redirect="contact-us"
        fullheight={true}
        backgroundImage={background}
        animated={true}
      />

      {/* <LeftContentImag
        image={background2}
        title="Who we are "
        subtitle="Groeinnov8 is a forward-thinking digital transformation company. We specialize in leveraging cutting-edge technologies to drive innovation and digital growth. Our expertise spans across Low Code Web/App Development and Business Process Automation, utilizing industry-leading platforms such as REACT, Appian, Mendix, Power Apps, Power Automate, UI Path, and Automation Anywhere. Additionally, we offer advanced analytics solutions using tools like MicroStrategy, Fabric/Power BI, and Tableau. We also integrate Generative AI through top-tier platforms including Azure Open AI, AWS Bedrock, Microsoft Co-Pilots, and Google Vertex, helping businesses unlock their full digital potentia"
        buttoname="Lets Get in Touch"
        subtitle2="We empower businesses worldwide, including in North America, Europe, and Japan, by delivering advanced, tailored IT solutions. Our team of seasoned experts leverages the latest technologies to build, transform, and manage IT operations, ensuring transparency, honesty, and efficiency in everything we do"
        redirect="/about-us"
        // fullheight={true}
        imgclassname="who-we-are-img"
        backgroundImage={background1}
      /> */}
      <Whoweare />
      <Whatwedo />
      <Groeiknowledge />

      <div className="home-talent-contracting-training">
        <LeftContentImag
          image={talent}
          title="Talent Contracting & Training"
          titleclassname="left-pros-left-content-title"
          subtitle="At Groei, we have been assisting clients with their talent acquisition needs by adhering to a rigorous, quality-driven process to identify and recruit the best talent in the market. Additionally, empower your growth with our expert-led training programs in the latest technologies, including Low Code Business Applications, Generative AI Tools, and Business Process Automation—designed to keep you ahead in the ever-evolving IT landscape."
          buttoname="Read More"
          subtitleclassname="left-pros-left-content-subtitle"
          redirect="/training-talent-contracting"
          imgorder="fist-image-order"
          contentorder="content-second-order"
        />
      </div>
      <Homewhay />
      <Marketingtools tools={tools} />
      <OurPublications />
    </div>
  );
}
