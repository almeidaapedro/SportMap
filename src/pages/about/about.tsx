import styles from "./about.module.css";

function About() {
  return (
    <main className={styles.about}>

      <section className={styles.hero}>

        <h1>Sobre o Sport Map</h1>

        <p>
          Encontre quadras esportivas de forma rápida, simples e gratuita.
        </p>

      </section>

      <section className={styles.section}>

        <div className={styles.card}>

          <h2>🗺️ O que é o Sport Map?</h2>

          <p>
            O Sport Map é uma plataforma criada para facilitar a busca por
            quadras esportivas públicas e particulares em diversas cidades.
          </p>

          <p>
            Nosso objetivo é conectar pessoas aos melhores espaços para a
            prática esportiva, oferecendo uma experiência simples, rápida e
            intuitiva.
          </p>

        </div>

      </section>

      <section className={styles.section}>

        <h2 className={styles.title}>
          Como funciona?
        </h2>

        <div className={styles.steps}>

          <div className={styles.stepCard}>

            <span>🔍</span>

            <h3>Pesquise</h3>

            <p>
              Digite o nome da quadra, cidade ou esporte desejado.
            </p>

          </div>

          <div className={styles.stepCard}>

            <span>📍</span>

            <h3>Visualize</h3>

            <p>
              Veja a localização da quadra diretamente no mapa.
            </p>

          </div>

          <div className={styles.stepCard}>

            <span>🏆</span>

            <h3>Pratique</h3>

            <p>
              Escolha o melhor local e aproveite para praticar seu esporte.
            </p>

          </div>

        </div>

      </section>

      <section className={styles.section}>

        <h2 className={styles.title}>
          Recursos
        </h2>

        <div className={styles.resources}>

          <div className={styles.resource}>
            ⚽
            <p>Diversos esportes</p>
          </div>

          <div className={styles.resource}>
            📍
            <p>Mapa interativo</p>
          </div>

          <div className={styles.resource}>
            ⭐
            <p>Avaliações</p>
          </div>

          <div className={styles.resource}>
            📱
            <p>Interface simples</p>
          </div>

        </div>

      </section>

      <section className={styles.goal}>

        <h2>Nosso objetivo</h2>

        <p>
          Incentivar a prática esportiva, tornando a busca por quadras muito
          mais simples e acessível para qualquer pessoa.
        </p>

      </section>

    </main>
  );
}

export default About;
