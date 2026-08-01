import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <div className={styles.logo}>
          <Link to="/">
            Sport Map
          </Link>
        </div>

        <nav className={styles.menu}>
          <Link to="/">Início</Link>

          <Link to="/about">Sobre</Link>

          <Link to="/explore">Explorar</Link>

          <Link to="/contact">Contato</Link>
        </nav>

        <Link to="/explore" className={styles.button}>
          Buscar quadras
        </Link>

      </div>
    </header>
  );
}

export default Navbar;