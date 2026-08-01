import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <div className={styles.logo}>
          <Link to="/" onClick={closeMenu}>
            Sport Map
          </Link>
        </div>

        <nav className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Início
          </Link>

          <Link to="/about" onClick={closeMenu}>
            Sobre
          </Link>

          <Link to="/explore" onClick={closeMenu}>
            Explorar
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contato
          </Link>

          <Link 
            to="/explore" 
            className={styles.mobileButton}
            onClick={closeMenu}
          >
            Buscar quadras
          </Link>
        </nav>


        <Link to="/explore" className={styles.button}>
          Buscar quadras
        </Link>


        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


      </div>
    </header>
  );
}

export default Navbar;