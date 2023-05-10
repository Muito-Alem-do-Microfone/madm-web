import wallpaper from "../../../assets/wallpaper.jpg";
import "../../../App.css";
import RegisterSection from "../../../components/organisms/RegisterSection";


function Register() {
  return (
      <div className="wallpaper" style={{ backgroundImage: `url(${wallpaper})` }}>
        <RegisterSection />
      </div>
  );
}

export default Register;