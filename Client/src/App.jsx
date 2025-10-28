import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/header/header";
import Home from "./components/home/home";
import Footer from "./layouts/footer/footer";
import Blog from "./components/blog/blog";
import BlogDetails from "./components/blog/blogdetails";
import Gkcgroi from "./components/gkc/gkcgroi";
import StepsProcess from "./components/trainingtalent/stepsprocess";
import OurService from "./components/service/OurService";
import AboutUs from "./components/aboutus/AboutUs";
import TechnicalService from "./components/technicalservice/TechnicalService";
import ContactPage from "./components/common/ContactPage";
import Trainingtalentcontracting from "./components/service/trainingtalent.contracting";
import ScrollToTop from "./components/common/ScrollToTop";
import PrivacyPolicy from "./components/policy/policy";
import Disclaimer from "./components/policy/Disclaimer";
import AllDesplayIcon from "./components/common/AllDesplayIcon";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/gkc-groei-knowledge-center" element={<Gkcgroi />} />
        <Route path="/trainingtalent" element={<StepsProcess />} />
        <Route path="/our-services" element={<OurService />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactPage />} />

        <Route
          path="/training-talent-contracting"
          element={<Trainingtalentcontracting />}
        />
        <Route path="/policy-terms" element={<PrivacyPolicy />} />
        <Route path="/desclaimer-details" element={<Disclaimer />} />

        <Route
          path="/technical-services-consulting"
          element={<TechnicalService />}
        />

        {/* Add more routes here as needed */}
      </Routes>
      <Footer />
      <AllDesplayIcon />
    </>
  );
}

export default App;
