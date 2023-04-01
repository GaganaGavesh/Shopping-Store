import DropDown from "./DropDown";

const MenusItems = ({ items }) => {
  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <button type="button">{items.title} </button>
          <DropDown submenus={items.submenu} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenusItems;
