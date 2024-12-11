import "./Home.css";
import Lottie from "lottie-react";
import thanks from "../../assets/lotties/success.json";

export function Home() {
  return (
    <div className="container">
      <Lottie animationData={thanks} loop={true} />
      <h1 className="title">Thank you for using our app</h1>
      <p className="description">You can close this page.</p>
    </div>
  );
}
