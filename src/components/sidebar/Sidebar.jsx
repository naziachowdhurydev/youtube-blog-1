import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarIteam">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://plus.unsplash.com/premium_photo-1676478746990-4ef5c8ef234a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim est non
          recusandae asperiores quas et?
        </p>
      </div>
      <div className="sidebarIteam">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListIteam">Life</li>
          <li className="sidebarListIteam">Music</li>
          <li className="sidebarListIteam">Style</li>
          <li className="sidebarListIteam">Sport</li>
          <li className="sidebarListIteam">Tech</li>
          <li className="sidebarListIteam">Cinema</li>
        </ul>
      </div>
      <div className="sidebarIteam">
        <span className="sidebarTitle">FOLLOW US</span>
      </div>
      <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
      </div>
    </div>
  );
}
