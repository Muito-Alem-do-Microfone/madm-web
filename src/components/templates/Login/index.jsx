import wallpaper from "../../../assets/wallpaper.jpg";
import "../../../App.css";
import LoginSection from "../../../components/organisms/LoginSection";


function Login() {
  return (
      <div className="wallpaper" style={{ backgroundImage: `url(${wallpaper})` }}>
        <LoginSection />
      </div>
  );
}

export default Login;