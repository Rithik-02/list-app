import "./Menu.css";
import App from "../App";

const Menu = ({ menuOpen, onClick }) => {
  console.log(menuOpen);
  return (
    <div>
      <div className="menuOpen">
        <p className={menuOpen ? "navHeading" : "display"}>Menu</p>
        <button className="btnMenu" onClick={onClick}>
          <img src={require("../assets/menu.png")} />
        </button>
      </div>
      <div className={menuOpen ? "menuContent" : "display"}>
        <p className="listHeading">LISTS</p>
        <nav className="listNav">
          <a className="navLink" href="#">
            <span className="myDiva"></span>
            Personal
          </a>
          <a className="navLink" href="#">
            <span className="myDivb"></span>
            Work
          </a>
          <a className="navLink" href="#">
            <span className="myDivc"></span>
            Game
          </a>
        </nav>
      </div>
    </div>
  );
};
export default Menu;
