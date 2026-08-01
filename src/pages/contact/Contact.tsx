import styles from "./Contact.module.css";

function Contact() {
  return (
    <main className={styles.contact}>

      <section className={styles.hero}>

        <h1>Entre em contato</h1>

        <p>
          Encontrou algum problema, possui
          alguma dúvida? 
          <p>Envie uma mensagem para nossa equipe.</p>
        </p>

      </section>

      <section className={styles.container}>

        <div className={styles.formCard}>

          <h2>Fale conosco</h2>

          <form
            action="https://formsubmit.co/contato.duquepluz@gmail.com"
            method="POST"
          >

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_subject"
              value="Novo contato - Sport Map"
            />

            <input
              type="hidden"
              name="_next"
              value="http://localhost:5173/contact?success=true"
            />

            <input
              type="text"
              name="Nome"
              placeholder="Seu nome"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Seu e-mail"
              required
            />

            <select
              name="Assunto"
              required
            >
              <option value="">
                Selecione um assunto
              </option>

              <option>
                Sugestão
              </option>

              <option>
                Reportar problema
              </option>

              {/* <option>
                Cadastro de quadra
              </option> */}

              <option>
                Parceria
              </option>

              <option>
                Outro
              </option>

            </select>

            <textarea
              name="Mensagem"
              rows={6}
              placeholder="Digite sua mensagem..."
              required
            />

            <button type="submit">
              Enviar mensagem
            </button>

          </form>

        </div>

        <div className={styles.info}>

          <div className={styles.infoCard}>

            <h3>📧 E-mail</h3>

            <p>
              contato.duquepluz@gmail.com
            </p>

          </div>

          <div className={styles.infoCard}>

            <h3>🏢 Desenvolvido por</h3>

            <p>
              DuquePluz
            </p>

          </div>

          <div className={styles.infoCard}>

            <h3>📍 Localização</h3>

            <p>
              São Bernardo do Campo - SP
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;