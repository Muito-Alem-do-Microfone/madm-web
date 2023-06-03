import Header from "../../../components/organisms/Header";
import Carousel from "../../organisms/Carousel";
import CardSection1 from "../../organisms/CardSection1"
import CardSection2 from "../../organisms/CardSection2"
import Footer from "../../organisms/Footer";


function Login() {
  return (
      <div>
        <Header />
        <Carousel />
        <CardSection1 />
        <CardSection2 />
        <Footer />
      </div>
  );
}

export default Login;