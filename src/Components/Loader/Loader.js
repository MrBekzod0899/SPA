import "./loader.css";
import loader from '../../asset/loader-2_food.gif'
export default function Loader() {
  return (
    <div className="loader">
          <img src={loader} alt="Loader"/>
      </div>
  );
}
