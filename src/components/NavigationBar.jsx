import { Link } from "react-router-dom";
import "../stylesheets/navigation.css"


const NavigationBar = () => {
    return (
        <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="nav-item">
          <Link to="/excercise">Add Excercise</Link>
          </li>
          <li className="nav-item">
          <Link to="/food">Add Food</Link>
          </li>
          <li className="nav-item">
          <Link to="/goal">Add Goal</Link>
          </li>
          <li className="nav-item">
            <Link to="/excerciseboard">Excercise</Link>
          </li>
          <li className="nav-item">
          <Link to="/foodslist">Tracked Foods</Link>
          </li>
          <li className="nav-item">
          <Link to="/goalslist">Tracked Goals</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavigationBar;