import './styles.css';

const solutions = [
  {
    title: 'Sistemas de navegación',
    description:
      'Instalación y mantenimiento de radares, pilotos automáticos, cartas electrónicas y sensores de última generación.',
    icon: '🧭',
  },
  {
    title: 'Comunicaciones marítimas',
    description:
      'Soluciones integrales en radio VHF, satélite, AIS y redes de datos para garantizar una conexión fiable en alta mar.',
    icon: '📡',
  },
  {
    title: 'Energía y control',
    description:
      'Cuadros eléctricos, baterías inteligentes y sistemas de monitorización para optimizar el rendimiento energético.',
    icon: '⚡',
  },
];

const serviceHighlights = [
  {
    title: 'Asesoramiento experto',
    description: 'Ingenieros especializados que diseñan proyectos a medida para cada embarcación.',
  },
  {
    title: 'Integraciones completas',
    description: 'Unificamos equipos de diferentes marcas para ofrecer una experiencia de navegación sin fricciones.',
  },
  {
    title: 'Soporte 24/7',
    description: 'Servicio técnico permanente para resolver incidencias de forma ágil en cualquier puerto.',
  },
];

const partners = ['Raymarine', 'Garmin', 'Simrad', 'Furuno', 'B&G'];

function App() {
  return (
    <div className="app">
      <header className="announcement-bar">
        <div className="container">
          <span>Atención técnica en toda la costa mediterránea</span>
          <span>·</span>
          <span>info@natnautica.es</span>
          <span>·</span>
          <span>+34 689 123 456</span>
        </div>
      </header>

      <nav className="main-nav">
        <div className="container nav-content">
          <div className="logo">
            <span className="logo-mark">NN</span>
            <div className="logo-text">
              <strong>NatNáutica</strong>
              <small>Electrónica &amp; Sistemas navales</small>
            </div>
          </div>
          <div className="nav-links">
            <a href="#soluciones">Soluciones</a>
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </div>
          <a className="cta-button" href="#contacto">
            Solicitar propuesta
          </a>
        </div>
      </nav>

      <section className="hero" id="nosotros">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="eyebrow">Tecnología naval de confianza</span>
            <h1>
              Evolucionamos tu embarcación con soluciones electrónicas inteligentes y un equipo técnico cercano.
            </h1>
            <p>
              Desde el diseño hasta la puesta en marcha, acompañamos a armadores, astilleros y profesionales para
              garantizar navegación segura, eficiente y conectada durante todo el año.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#soluciones">
                Ver soluciones
              </a>
              <a className="secondary" href="#contacto">
                Habla con un experto
              </a>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-header">
              <h2>Plan integral 360º</h2>
              <p>
                Auditoría, instalación, formación y mantenimiento continuo con informes personalizados para cada
                embarcación.
              </p>
            </div>
            <ul>
              <li>
                <strong>150+</strong>
                <span>Proyectos náuticos ejecutados con éxito</span>
              </li>
              <li>
                <strong>25</strong>
                <span>Años de experiencia acumulada del equipo técnico</span>
              </li>
              <li>
                <strong>48h</strong>
                <span>Tiempo medio de respuesta en servicios de emergencia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero-shape hero-shape--one" />
        <div className="hero-shape hero-shape--two" />
      </section>

      <section className="solutions" id="soluciones">
        <div className="container section-heading">
          <span className="eyebrow">Soluciones a medida</span>
          <h2>Integramos tecnología líder para cada tipo de embarcación</h2>
          <p>
            Trabajamos con fabricantes líderes para entregar sistemas robustos que mejoran la seguridad, el confort y la
            eficiencia energética tanto en recreo como en flotas profesionales.
          </p>
        </div>
        <div className="container solution-grid">
          {solutions.map((solution) => (
            <article key={solution.title} className="solution-card">
              <span className="icon" aria-hidden="true">
                {solution.icon}
              </span>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <a href="#contacto" className="more-link">
                Saber más →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="servicios">
        <div className="container">
          <div className="services-intro">
            <span className="eyebrow">Servicios especializados</span>
            <h2>Nos encargamos de todo el ciclo de vida de tus equipos electrónicos</h2>
            <p>
              Coordinamos proyectos llave en mano: diseño, instalación certificada, calibración, formaciones a bordo y
              soporte preventivo para evitar paradas inesperadas.
            </p>
          </div>
          <div className="services-list">
            {serviceHighlights.map((service) => (
              <div key={service.title} className="service-item">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners" aria-label="Marcas partners">
        <div className="container partners-content">
          <span className="eyebrow">Partners certificados</span>
          <div className="partner-logos">
            {partners.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="contacto">
        <div className="container cta-content">
          <div>
            <span className="eyebrow">Contacta con nosotros</span>
            <h2>Agenda una visita técnica o solicita una demo a bordo</h2>
            <p>
              Cuéntanos qué necesitas y prepararemos una propuesta personalizada para tu embarcación o flota. Estamos a tu
              disposición en Valencia, Alicante, Baleares y Barcelona.
            </p>
          </div>
          <a className="cta-button" href="mailto:info@natnautica.es">
            Escribir correo
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <div>
            <strong>NatNáutica 2.0</strong>
            <p>Especialistas en electrónica y telecomunicaciones navales desde 1998.</p>
          </div>
          <div className="footer-links">
            <a href="tel:+34689123456">+34 689 123 456</a>
            <a href="mailto:info@natnautica.es">info@natnautica.es</a>
            <span>Puerto de Valencia · Muelle de Levante</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
