import Banner from "../../components/banner";
import WhyChooseUs from "../../components/chooseus";
import Contributions from "../../components/contributions";
import Header from "../../components/header";
import OurTeam from "../../components/our-teams";

function AboutUs() {
  return (
    <section className="min-h-screen bg-white">
      {/* Header & Breadcrumb */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Contributions */}
      <Contributions />
      {/* Why Choose us */}
      <WhyChooseUs />
      {/* Our Team */}
      <OurTeam />
    </section>
  );
}

export default AboutUs;
