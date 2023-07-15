import { Header, HeroSection, ExploreSection, AnnouncementsSection } from "../../organisms"
import AboutSection from "../../organisms/AboutSection"

const Home = () => {
  return (
      <div>
        <Header />
        <HeroSection />
        <ExploreSection />
        <AnnouncementsSection />
        {/* <AboutSection /> */}
      </div>
  )
}

export default Home