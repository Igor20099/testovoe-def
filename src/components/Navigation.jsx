import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.active : styles.inactive
        }
        to="/websocket"
      >
        Websocket
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.active : styles.inactive
        }
        to="/api"
      >
        Api
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.active : styles.inactive
        }
        to="/infinite-scroll"
      >
        Infinite Scroll
      </NavLink>
    </nav>
  );
}

export default Navigation;
