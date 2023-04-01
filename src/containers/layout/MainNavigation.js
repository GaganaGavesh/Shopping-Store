import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { menuItems } from "./menuItems";
import MenusItems from "./MenusItems";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Thili</div>
      <nav>
        <ul className="menus">
          {menuItems.map((menu, index) => (
            
              <MenusItems items={menu} key={index} />
          ))}
        </ul>
        {/*<ul>
          <li>
            <Link to="/productItems">Women</Link>
          </li>
          <li>
            <Link to="/">Men</Link>
          </li>
          <li>
            <Link to="/productItems">Kids</Link>
          </li>
  </ul>*/}
      </nav>
    </header>
  );
};

export default MainNavigation;
