import logo from "./img/logo.png";
import corn_field from "./img/corn-field.jpg";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* <header className="main-header clearfix"> */}
      <header className="main-header">
        <div className="logo-and-title">
          <img
            src={logo}
            alt="Logo tractor"
            width="64"
            height="64"
            className="header-company-logo"
          />
          <h1 className="header-company-title">Sudstoc</h1>
        </div>

        <nav>
          <a href="gallery.html">Galerie</a>
        </nav>
      </header>

      <article>
        <header className="intro-header">
          <h2>Bine ați venit la Sudstoc SRL!</h2>
          <p>
            Sudstoc SRL este un <em>furnizor cheie</em> în industria agricolă.
          </p>
          <img
            src={corn_field}
            alt="Corn field"
            width="500"
            height="200"
            className="corn-field"
          />
        </header>
        <h3>Partenerul dumneavoastră de încredere</h3>
        <p>
          Înființată în 2007 în Republica Moldova, Sudstoc SRL este o companie
          mică, dar dinamică, ce activează în domeniul agricol. Oferim servicii
          de întreținere și reparații pentru autovehicule, precum și o gamă
          variată de piese și accesorii de calitate. De asemenea, ne dedicăm
          clienților noștri printr-un comerț cu amănuntul accesibil și bine
          organizat în magazinele noastre.
        </p>
        <p>
          Misiunea noastră este să sprijinim comunitatea agricolă prin soluții
          fiabile, produse de încredere și servicii prompte. Cu Sudstoc SRL,
          partenerul dumneavoastră de <strong>încredere</strong>, orice
          provocare devine mai ușor de depășit.
        </p>
        <h3>De ce noi</h3>
        <ol>
          <li>Orientare către nevoi specifice ale clienților</li>
          <li>Timpi utili de prestare a serviciilor</li>
          <li>Dorință de colaborare pe termen lung</li>
        </ol>
        <h3>Cum ne găsiți</h3>
        <ul>
          <li>Telefon: +37379603125</li>
          <li>Adresa: str. Miorița 18, or. Cantemir, Republica Moldova</li>
        </ul>
      </article>
      <footer>
        <p id="copyright">Copyright &copy; 2025 by SC SUDSTOC SRL</p>
      </footer>
      <aside>
        <h4>Important!</h4>
        <p className="service-info">
          Pagina noastră de internet,{" "}
          <a href="http://sudstoc.md" target="_blank" rel="noreferrer">
            sudstoc.md
          </a>
          , este în curs de dezvoltare. Ultima actualizare: 02.02.2025 22:21
        </p>
        <p className="service-info">Rămâneți cu ochii pe noi! O zi frumoasă!</p>
      </aside>

      {/* <img
        src={logo}
        alt="Logo tractor"
        width="64"
        height="64"
        className="corner-company-logo"
      /> */}
    </div>
  );
}

export default App;
