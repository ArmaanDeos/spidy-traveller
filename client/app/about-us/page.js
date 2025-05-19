import AboutSection from "@/components/AboutUs";
import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Newsletter from "@/components/NewsLetter";

const AboutUsPage = () => {
  return (
    <div className="">
      <Header />
      <div className="mt-12">
        <AboutSection />
      </div>

      <CustomerReviews />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
