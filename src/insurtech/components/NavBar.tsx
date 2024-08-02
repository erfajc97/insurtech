import { NavLink } from "react-router-dom";
import "../styles.antd.global.css";
import CustomMenu from "../UI/customMenu/CustomMenu";
const NavBar = () => {
  const navlinkItems = [
    { key: "Inicio", label: "Inicio", path: "/" },
    { key: "Acerca", label: "Acerca", path: "/about" },
    { key: "Seguros", label: "Seguros", path: "/products" },
    { key: "Contactos", label: "Contactos", path: "/contacts" },
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
