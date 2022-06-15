import Layout from "../src/components/Layout";
import HomeSection from "./homepage/homeSection";
import SponsorSection from "./homepage/sponsorSection";

export default function Home() {
  return (
    <Layout>
      <div>
        <HomeSection />
        <SponsorSection />
      </div>
    </Layout>
  );
}
