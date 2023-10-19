import preloader from "../../images/preloader.svg";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <img className="preloader__circle" src={preloader} alt="pokeball" />
    </div>
  );
};

export default Preloader;
