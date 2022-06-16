import Layout from '../src/components/Layout';
import AboutSection from './homepage/aboutSection';
import FragmentSection from './homepage/fragmentSection';
import HomeSection from './homepage/homeSection';
import RevealSection from './homepage/revealSection';
import SponsorSection from './homepage/sponsorSection';

export default function Home() {
  return (
    <Layout>
      <div>
        <HomeSection />
        <SponsorSection />
        <AboutSection />
        <FragmentSection />
        <RevealSection />
      </div>
    </Layout>
  );
}
