import { NavLink } from "react-router-dom";
import "../styles.antd.global.css";
import CustomMenu from "../UI/customMenu/CustomMenu";
const NavBar = () => {
  const navlinkItems = [
    { key: "home", label: "Home", path: "/" },
    { key: "about", label: "About", path: "/about" },
    { key: "products", label: "Products", path: "/products" },
    { key: "contacts", label: "Contacts", path: "/contacts" },
  ].map((item) => ({
    key: item.key,
    label: (
      <NavLink to={item.path} style={{ color: "inherit" }}>
        {item.label}
      </NavLink>
    ),
  }));

  return <CustomMenu items={navlinkItems} />;
};

export default NavBar;
