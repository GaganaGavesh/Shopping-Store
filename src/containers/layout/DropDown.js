/* eslint-disable react/jsx-no-comment-textnodes */

const DropDown = ({ submenus }) => {
  return (
    <ul className="dropdown">
      {submenus.map((submenu, index) => {
        console.log("submenu :", submenu.title);
        return (
          <li key={index} className="menu-items">
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default DropDown;
