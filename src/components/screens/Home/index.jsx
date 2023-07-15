import Header from "../../organisms/Header"
import Carousel from "../../organisms/Carousel"
import ExploreSection from "../../organisms/ExploreSection"
import UsersSection from "../../organisms/UsersSection"
import AboutSection from "../../organisms/AboutSection"

const Home = () => {
  return (
      <div>
        <Header />
        <Carousel />
        <ExploreSection />
        <UsersSection />
        <AboutSection />
      </div>
  )
}

export default Home