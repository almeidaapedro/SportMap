import { useState } from "react";
import GoogleMapComponent from "../../components/map/GoogleMap";
import SearchBar from "../../components/search/SearchBar";
import { courts } from "../../data/courts";
import styles from "./Explore.module.css";

function Explore() {
  const [search, setSearch] = useState("");

  const [sport, setSport] = useState("Todos os esportes");

  const [center, setCenter] = useState({
    lat: -23.6914,
    lng: -46.5646,
  });

  const [marker, setMarker] = useState({
    lat: -23.6914,
    lng: -46.5646,
  });

  const [filteredCourts, setFilteredCourts] = useState<typeof courts>([]);

  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    setHasSearched(true);

    let results = [...courts];

    if (search.trim() !== "") {

      const words = search
        .toLowerCase()
        .split(" ")
        .filter(Boolean);

      results = results.filter((court) => {

        const text = `
          ${court.name}
          ${court.city}
          ${court.address}
          ${court.sport}
        `.toLowerCase();

        return words.every((word) => text.includes(word));

      });

    }

    if (sport !== "Todos os esportes") {

      results = results.filter(
        (court) => court.sport === sport
      );

    }

    setFilteredCourts(results);

    if (results.length > 0) {

      setCenter({
        lat: results[0].lat,
        lng: results[0].lng,
      });

      setMarker({
        lat: results[0].lat,
        lng: results[0].lng,
      });

    }
  };

  return (
    <main className={styles.explore}>

      <section className={styles.hero}>
        <h1>Encontre sua próxima quadra</h1>

        <p>
          Pesquise pelo nome da quadra e filtre pelo esporte desejado.
        </p>
      </section>

      <section className={styles.searchContainer}>

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <select
          value={sport}
          onChange={(e) => setSport(e.target.value)}
        >
          <option>Todos os esportes</option>
          <option>Futebol</option>
          <option>Basquete</option>
          <option>Vôlei</option>
          <option>Tênis</option>
        </select>

        <button onClick={handleSearch}>
          🔍 Buscar
        </button>

      </section>

      <section className={styles.mapSection}>

        <div className={styles.mapPlaceholder}>
          <GoogleMapComponent
            center={center}
            marker={marker}
            zoom={15}
          />
        </div>

      </section>

      <section className={styles.results}>

        <h2>Quadras encontradas</h2>

        <div className={styles.cards}>

          {!hasSearched ? (

            <div className={styles.card}>

              <h3>🔎 Pesquise uma quadra</h3>

              <p>
                Digite o nome de uma quadra e clique em Buscar.
              </p>

            </div>

          ) : filteredCourts.length === 0 ? (

            <div className={styles.card}>

              <h3>❌ Nenhuma quadra encontrada</h3>

              <p>
                Não encontramos nenhuma quadra com esse nome.
              </p>

              <p>
                Tente pesquisar outro nome ou alterar o filtro de esporte.
              </p>

            </div>

          ) : (

            filteredCourts.map((court) => (

              <div
                className={styles.card}
                key={court.id}
              >

                <h3>{court.name}</h3>

                <p>📍 {court.address}</p>

                <p>🏙️ {court.city}</p>

                <p>🏅 {court.sport}</p>

                <p>⭐ {court.rating}</p>

                <p>
                  {court.lighted ? "💡 Iluminada" : "🌙 Sem iluminação"}
                </p>

                <button
                  onClick={() => {

                    const position = {
                      lat: court.lat,
                      lng: court.lng,
                    };

                    setCenter(position);
                    setMarker(position);

                  }}
                >
                  Ver no mapa
                </button>

              </div>

            ))

          )}

        </div>

      </section>

    </main>
  );
}

export default Explore;