import Banner from "../../components/banner";
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
      {/* Our Team */}
      <OurTeam />
    </section>
  );
}

export default AboutUs;
