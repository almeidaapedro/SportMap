import styles from "./Hero.module.css";
import societyImage from "../../assets/images/society.jpg"
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* ESQUERDA */}

        <div className={styles.content}>
          <span className={styles.badge}>
            ⚽ Encontre a quadra ideal para o seu esporte
          </span>

          <h1>
            Descubra onde jogar com mais facilidade.
          </h1>

          <p>
            Encontre quadras esportivas públicas e particulares,
            compare estrutura, localização e escolha o melhor lugar
            para praticar seu esporte.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryButton}>
              <Link to="/about">Como Funciona</Link>
            </button>
          </div>
        </div>

        {/* DIREITA */}

        <div className={styles.image}>
          <div className={styles.mockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.windowButtons}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>sportmap.app</p>
            </div>

            <div className={styles.mockupBody}>
              <div className={styles.searchBar}>
                🔍 Futebol Society
              </div>

              <div className={styles.courtCard}>
                <h3>Arena SBC</h3>

                <span className={styles.rating}>
                  ★★★★★ 4.8
                </span>

                <p>📍 Centro • 1,2 km</p>

                <div className={styles.tags}>
                  <span>⚽ Society</span>
                  <span>💡 Iluminada</span>
                  <span>🅿 Estacionamento</span>
                </div>

                <button>
                  Ver detalhes
                </button>
              </div>

              <div className={styles.fakeMap}>
                <img
                  src={societyImage}
                  alt="🗺️ Prévia do mapa"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;