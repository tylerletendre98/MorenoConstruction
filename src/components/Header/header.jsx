import React from "react";
import "./header.css";
import NavBar from "../Navbar/navBar";

const Header = () => {
  return (
    <div>
      <header className="header">
      <div class="container">
        <div class="row">
          <div class="col">
            <div className="comp-name">
              <div>
                <img src="https://www.bing.com/th?id=OIP.XRMj_ER-HEiZpB07t0KmGAHaE8&w=192&h=133&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" />
              </div>
              <h1>
                Moreno construction
              </h1>
            </div>
          </div>
          <div class="col-6">
          </div>
          <div class="col-3">
            <nav>
              <ul>
                <li>
                  things
                </li>
                <li>
                  things
                </li>
                <li>
                  things
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}
  

  export default Header;
