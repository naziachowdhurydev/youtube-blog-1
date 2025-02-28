import "./topbar.css";

export default function topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListIteams">HOME</li>
          <li className="topListIteams">ABOUT</li>
          <li className="topListIteams">CONTACT</li>
          <li className="topListIteams">WRITE</li>
          <li className="topListIteams">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://www.health.com/thmb/YXxmAuCsJHtTWvSWPorjVx1F7AQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-TypesOfCoffee-b8f6f7382a1443109f74edb1050f9808.jpg"
          alt=""
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
